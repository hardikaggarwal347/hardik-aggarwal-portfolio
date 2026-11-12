import React, { useState, useEffect } from 'react';
import {
  ArrowLeftRight,
  Copy,
  Check,
  RotateCcw,
  History,
  Trash2,
  AlertCircle,
  FileText,
  Eye,
  Download,
  Github,
  BookOpen,
  ExternalLink,
  Cpu,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

type NumberSystem = 'Decimal' | 'Binary' | 'Octal' | 'Hexadecimal';

interface ConversionRecord {
  id: string;
  inputValue: string;
  fromSystem: NumberSystem;
  outputValue: string;
  toSystem: NumberSystem;
  timestamp: string;
}

const STORAGE_KEY = 'hardik_coa_converter_history_v1';

export const CoaTool: React.FC = () => {
  // Converter States
  const [inputValue, setInputValue] = useState<string>('1010');
  const [fromSystem, setFromSystem] = useState<NumberSystem>('Binary');
  const [toSystem, setToSystem] = useState<NumberSystem>('Decimal');
  const [outputValue, setOutputValue] = useState<string>('10');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  // History State
  const [history, setHistory] = useState<ConversionRecord[]>([]);

  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setHistory(JSON.parse(saved));
      } else {
        // Sample default history showing practical examples
        setHistory([
          {
            id: 'sample-1',
            inputValue: '1010',
            fromSystem: 'Binary',
            outputValue: '10',
            toSystem: 'Decimal',
            timestamp: 'Initial Sample',
          },
          {
            id: 'sample-2',
            inputValue: '25',
            fromSystem: 'Decimal',
            outputValue: '31',
            toSystem: 'Octal',
            timestamp: 'Initial Sample',
          },
          {
            id: 'sample-3',
            inputValue: 'FF',
            fromSystem: 'Hexadecimal',
            outputValue: '255',
            toSystem: 'Decimal',
            timestamp: 'Initial Sample',
          },
        ]);
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Validation function
  const validateInput = (val: string, system: NumberSystem): string | null => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter a value.';
    }

    switch (system) {
      case 'Decimal':
        if (!/^-?\d+$/.test(trimmed)) {
          return 'Invalid decimal number. Only digits 0–9 are allowed.';
        }
        break;
      case 'Binary':
        if (!/^[01]+$/.test(trimmed)) {
          return 'Invalid binary number. Only 0 and 1 are allowed.';
        }
        break;
      case 'Octal':
        if (!/^[0-7]+$/.test(trimmed)) {
          return 'Invalid octal number. Only digits 0–7 are allowed.';
        }
        break;
      case 'Hexadecimal':
        if (!/^[0-9a-fA-F]+$/.test(trimmed)) {
          return 'Invalid hexadecimal number. Only digits 0–9 and letters A–F are allowed.';
        }
        break;
    }
    return null;
  };

  // Convert Core Logic
  const performConversion = (
    val: string = inputValue,
    from: NumberSystem = fromSystem,
    to: NumberSystem = toSystem
  ) => {
    const error = validateInput(val, from);
    if (error) {
      setErrorMessage(error);
      setOutputValue('');
      return;
    }

    setErrorMessage(null);
    try {
      const clean = val.trim();
      let decimalBigInt: bigint;

      // Parse to BigInt
      switch (from) {
        case 'Decimal':
          decimalBigInt = BigInt(clean);
          break;
        case 'Binary':
          decimalBigInt = BigInt(`0b${clean}`);
          break;
        case 'Octal':
          decimalBigInt = BigInt(`0o${clean}`);
          break;
        case 'Hexadecimal':
          decimalBigInt = BigInt(`0x${clean}`);
          break;
      }

      // Convert BigInt to target system
      let result = '';
      switch (to) {
        case 'Decimal':
          result = decimalBigInt.toString(10);
          break;
        case 'Binary':
          result = decimalBigInt.toString(2);
          break;
        case 'Octal':
          result = decimalBigInt.toString(8);
          break;
        case 'Hexadecimal':
          result = decimalBigInt.toString(16).toUpperCase();
          break;
      }

      setOutputValue(result);

      // Add to history
      const newRecord: ConversionRecord = {
        id: `${Date.now()}-${Math.random()}`,
        inputValue: clean,
        fromSystem: from,
        outputValue: result,
        toSystem: to,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };

      setHistory((prev) => {
        const updated = [newRecord, ...prev.slice(0, 9)];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch {}
        return updated;
      });
    } catch {
      setErrorMessage('Calculation overflow or invalid format.');
      setOutputValue('');
    }
  };

  // Handle Swap
  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => setIsSwapping(false), 300);

    const prevFrom = fromSystem;
    const prevTo = toSystem;
    setFromSystem(prevTo);
    setToSystem(prevFrom);

    if (outputValue && !errorMessage) {
      setInputValue(outputValue);
      performConversion(outputValue, prevTo, prevFrom);
    }
  };

  // Reset
  const handleReset = () => {
    setInputValue('');
    setOutputValue('');
    setErrorMessage(null);
    setFromSystem('Decimal');
    setToSystem('Binary');
  };

  // Copy Result
  const handleCopy = () => {
    if (!outputValue) return;
    navigator.clipboard.writeText(outputValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Clear History
  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    showToast('Conversion history cleared.');
  };

  // GitHub Link Handler
  const handleGithubClick = (e: React.MouseEvent) => {
    if (!portfolioData.coaGithubUrl || portfolioData.coaGithubUrl === '#') {
      e.preventDefault();
      showToast('GitHub link coming soon.');
    }
  };

  // Practical Record Handler
  const handlePracticalRecordClick = () => {
    if (!portfolioData.coaPracticalFile) {
      showToast('Practical record coming soon.');
    } else {
      window.open(portfolioData.coaPracticalFile, '_blank');
    }
  };

  const systems: NumberSystem[] = ['Decimal', 'Binary', 'Octal', 'Hexadecimal'];

  return (
    <section id="coa-tool" className="py-20 bg-[#F8FAFC] border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>PRACTICAL LEARNING ARTIFACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            COA LEARNING TOOL
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Interactive Computer Organization & Architecture Learning Tools
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm flex items-center justify-between shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5">
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-blue-500 hover:text-blue-800 text-xs font-bold ml-4 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* 1. NUMBER SYSTEM CONVERTER MAIN CONTAINER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm relative mb-16 overflow-hidden">
          {/* Subtle top bar accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  NUMBER SYSTEM CONVERTER
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Dynamically convert values across Decimal, Binary, Octal, and Hexadecimal.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                title="Reset input and output"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Interactive Converter Cards (Side-by-Side on Desktop, Stack on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-6 items-center mb-8">
            {/* INPUT CARD (5 cols) */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                    INPUT
                  </span>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    Source Value
                  </span>
                </div>

                {/* Input Text Field */}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      performConversion();
                    }
                  }}
                  placeholder={`Enter ${fromSystem.toLowerCase()} value...`}
                  aria-label="Input Value"
                  className="w-full px-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 font-mono text-base text-slate-900 outline-hidden transition-all placeholder:text-slate-400"
                />

                {/* System Selection Dropdown */}
                <div className="mt-4">
                  <label htmlFor="from-system-select" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    From System
                  </label>
                  <select
                    id="from-system-select"
                    value={fromSystem}
                    onChange={(e) => setFromSystem(e.target.value as NumberSystem)}
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 focus:border-blue-500 text-xs sm:text-sm font-semibold text-slate-800 outline-hidden transition-colors cursor-pointer"
                  >
                    {systems.map((sys) => (
                      <option key={sys} value={sys}>
                        {sys}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* SWAP & ACTION BUTTON (1 col) */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-2">
              <button
                type="button"
                onClick={handleSwap}
                aria-label="Swap Number Systems"
                title="Swap From and To systems"
                className={`w-12 h-12 rounded-2xl bg-white hover:bg-blue-50 border-2 border-slate-200 hover:border-blue-400 text-blue-600 flex items-center justify-center shadow-xs transition-all duration-300 cursor-pointer ${
                  isSwapping ? 'rotate-180 scale-110' : ''
                }`}
              >
                <ArrowLeftRight className="w-5 h-5 transition-transform" />
              </button>
            </div>

            {/* OUTPUT CARD (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                    OUTPUT
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    Converted Result
                  </span>
                </div>

                {/* Output Value Display */}
                <div className="relative">
                  <div className="w-full min-h-[54px] px-4 py-3 bg-[#F8FAFC] rounded-xl border border-slate-200 font-mono text-base text-slate-900 flex items-center justify-between overflow-x-auto">
                    <span className="font-bold tracking-wider select-all break-all">
                      {outputValue || <span className="text-slate-400 font-normal text-sm">Awaiting conversion...</span>}
                    </span>
                    {outputValue && (
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="ml-2 p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors shrink-0 cursor-pointer flex items-center gap-1 text-xs"
                        title="Copy converted value"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span className="text-[11px] font-bold text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Target System Selection Dropdown */}
                <div className="mt-4">
                  <label htmlFor="to-system-select" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    To System
                  </label>
                  <select
                    id="to-system-select"
                    value={toSystem}
                    onChange={(e) => setToSystem(e.target.value as NumberSystem)}
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 focus:border-blue-500 text-xs sm:text-sm font-semibold text-slate-800 outline-hidden transition-colors cursor-pointer"
                  >
                    {systems.map((sys) => (
                      <option key={sys} value={sys}>
                        {sys}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message Alert */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Convert Action Button */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => performConversion()}
              className="px-8 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Convert Value
            </button>
          </div>

          {/* Educational Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-700">Number System Converter: </span>
              <span>This interactive tool allows you to convert values between Decimal, Binary, Octal and Hexadecimal number systems.</span>
            </div>
          </div>
        </div>

        {/* 2. RECENT CONVERSIONS HISTORY */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 mb-16 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Recent Conversions</h3>
            </div>
            {history.length > 0 && (
              <button
                type="button"
                onClick={handleClearHistory}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear History</span>
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <p className="text-xs text-slate-400 py-3 text-center">No recent conversions recorded.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {history.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => {
                    setInputValue(rec.inputValue);
                    setFromSystem(rec.fromSystem);
                    setToSystem(rec.toSystem);
                    setOutputValue(rec.outputValue);
                  }}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-200 transition-colors cursor-pointer flex flex-col justify-between"
                  title="Click to restore this conversion"
                >
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-900 mb-1">
                    <span className="truncate">{rec.inputValue}</span>
                    <span className="text-blue-600">→</span>
                    <span className="truncate">{rec.outputValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{rec.fromSystem} to {rec.toSystem}</span>
                    <span>{rec.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. COA PRACTICAL RECORD & PRACTICAL WORK CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card A: COA Practical Record / GitHub */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-5">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                COA Practical Record
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Access my COA practical work, programs and records.
              </p>
            </div>

            <div>
              <a
                href={portfolioData.coaGithubUrl}
                target={portfolioData.coaGithubUrl !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={handleGithubClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Card B: Practical Work */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 mb-5">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Practical Work
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                COA practical records and implementations.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={handlePracticalRecordClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View Practical Record</span>
                <span className="text-[10px] text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200 ml-1">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. ASSIGNMENTS SECTION */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>COURSEWORK DOCUMENTS</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Assignments
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Coursework and academic submissions for Computer Organization & Architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.assignments.map((assign) => (
              <div
                key={assign.id}
                className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {assign.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {assign.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 mb-3">
                    {assign.subject}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {assign.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                  {assign.file ? (
                    <>
                      <a
                        href={assign.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Assignment</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>

                      <a
                        href={assign.file}
                        download={`Hardik_Aggarwal_${assign.title.replace(/\s+/g, '_')}.${assign.file.split('.').pop()}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-blue-600" />
                        <span>Download</span>
                      </a>
                    </>
                  ) : (
                    <span className="text-xs text-slate-400 italic">
                      Assignment file coming soon.
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
