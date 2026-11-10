import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Building, Smartphone, MapPin, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { GIVING_DETAILS, CHURCH_INFO } from '../data/churchData';

export default function GivingModal({ isOpen, onClose }) {
  const [copiedField, setCopiedField] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-md shadow-elevated border border-neutral-border overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#103546] text-white p-5 sm:p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 w-11 h-11 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center touch-manipulation"
            aria-label="Close Giving Portal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-muted mb-1">
            <Heart className="w-3.5 h-3.5 fill-gold-muted" />
            <span>Online Giving &amp; Tithes</span>
          </div>
          
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white pr-8">
            Support the Church &amp; Missions
          </h2>
          <p className="text-xs text-stone-300 mt-1 italic font-serif">
            "Each of you should give what you have decided in your heart to give... for God loves a cheerful giver." &mdash; 2 Cor 9:7
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Method 1: UPI & QR Code */}
          <div className="p-4 sm:p-5 rounded-md bg-ivory-warm border border-neutral-border space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-charcoal font-serif font-bold text-sm sm:text-base">
                <Smartphone className="w-4 h-4 text-teal-deep shrink-0" />
                <span>Instant Transfer via UPI &amp; QR</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                GPay / PhonePe / Paytm / BHIM
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3 sm:p-4 rounded-md border border-neutral-border shadow-subtle">
              <div className="w-32 h-32 flex-shrink-0 bg-stone-50 border border-neutral-border rounded p-2 flex items-center justify-center">
                <img 
                  src={GIVING_DETAILS.qrImage} 
                  alt="Agape A.G Church UPI QR" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9866450060@ybl&pn=Agape%20Church';
                  }}
                />
              </div>

              <div className="space-y-2.5 flex-grow text-center sm:text-left w-full sm:w-auto">
                <div>
                  <span className="text-[11px] text-neutral-grey font-medium block">Official Church UPI ID</span>
                  <span className="text-sm sm:text-base font-bold text-charcoal font-mono break-all">{GIVING_DETAILS.upiId}</span>
                </div>
                <button
                  onClick={() => handleCopy(GIVING_DETAILS.upiId, 'upi')}
                  className={`w-full sm:w-auto px-4 py-2 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors min-h-[38px] touch-manipulation ${
                    copiedField === 'upi'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-teal-deep hover:bg-teal-dark text-white'
                  }`}
                >
                  {copiedField === 'upi' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'upi' ? 'UPI ID Copied!' : 'Copy UPI ID'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Method 2: Direct Bank Transfer */}
          <div className="p-4 sm:p-5 rounded-md bg-white border border-neutral-border space-y-3.5 shadow-subtle">
            <div className="flex items-center gap-2 text-charcoal font-serif font-bold text-sm sm:text-base">
              <Building className="w-4 h-4 text-teal-deep shrink-0" />
              <span>Direct Bank Transfer (NEFT / IMPS / RTGS)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <div className="bg-ivory p-3 rounded border border-neutral-border">
                <span className="text-[10px] text-neutral-grey block font-medium uppercase tracking-wider">Account Name</span>
                <span className="font-bold text-charcoal text-xs sm:text-sm">{GIVING_DETAILS.accountName}</span>
              </div>

              <div className="bg-ivory p-3 rounded border border-neutral-border flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-neutral-grey block font-medium uppercase tracking-wider">Account Number</span>
                  <span className="font-bold text-charcoal font-mono text-xs sm:text-sm truncate">{GIVING_DETAILS.accountNumber}</span>
                </div>
                <button
                  onClick={() => handleCopy(GIVING_DETAILS.accountNumber, 'acc')}
                  className="p-2 rounded hover:bg-white text-teal-deep min-w-[36px] min-h-[36px] flex items-center justify-center touch-manipulation"
                  title="Copy Account Number"
                >
                  {copiedField === 'acc' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="bg-ivory p-3 rounded border border-neutral-border">
                <span className="text-[10px] text-neutral-grey block font-medium uppercase tracking-wider">Bank &amp; Branch</span>
                <span className="font-bold text-charcoal text-xs sm:text-sm">{GIVING_DETAILS.bankName} ({GIVING_DETAILS.branch})</span>
              </div>

              <div className="bg-ivory p-3 rounded border border-neutral-border flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-neutral-grey block font-medium uppercase tracking-wider">IFSC Code</span>
                  <span className="font-bold text-charcoal font-mono text-xs sm:text-sm truncate">{GIVING_DETAILS.ifsc}</span>
                </div>
                <button
                  onClick={() => handleCopy(GIVING_DETAILS.ifsc, 'ifsc')}
                  className="p-2 rounded hover:bg-white text-teal-deep min-w-[36px] min-h-[36px] flex items-center justify-center touch-manipulation"
                  title="Copy IFSC Code"
                >
                  {copiedField === 'ifsc' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Acknowledgement note */}
          <div className="p-3 bg-ivory-warm rounded border border-neutral-border text-xs text-neutral-grey flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-deep shrink-0 mt-0.5" />
            <span>
              After sending your contribution, you may WhatsApp the UTR / screenshot to <strong className="text-charcoal">{CHURCH_INFO.phones[0]}</strong> for pastoral prayer dedication and official record.
            </span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-stone-50 border-t border-neutral-border flex justify-end">
          <button
            onClick={onClose}
            className="btn-secondary w-full sm:w-auto justify-center text-xs"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
