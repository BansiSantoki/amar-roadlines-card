/**
 * Builds a vCard 3.0 for Amar Roadlines — the version both iOS Contacts and
 * Android (Google Contacts) import without prompting for a format.
 */
export function buildVCard({ phone, website }: { phone: string; website: string }) {
  const tel = phone.replace(/[^\d+]/g, '')
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:;Amar Roadlines;;;',
    'FN:Amar Roadlines',
    'ORG:Amar Roadlines',
    `TEL;TYPE=WORK,VOICE:${tel}`,
    `URL:${website}`,
    'ADR;TYPE=WORK:;;Odhav;Ahmedabad;Gujarat;382415;India',
    'LABEL;TYPE=WORK:Odhav\\, Ahmedabad - 382415\\, Gujarat\\, India',
    'NOTE:Your Partner in Liquid Chemical Transportation',
    'END:VCARD',
  ]
  // vCard requires CRLF line endings.
  return lines.join('\r\n') + '\r\n'
}

export function downloadVCard(details: { phone: string; website: string }) {
  const blob = new Blob([buildVCard(details)], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

  if (isIOS) {
    // iOS Safari previews .vcf files and offers "Create New Contact".
    window.location.href = url
  } else {
    const a = document.createElement('a')
    a.href = url
    a.download = 'Amar-Roadlines.vcf'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
  window.setTimeout(() => URL.revokeObjectURL(url), 4000)
}
