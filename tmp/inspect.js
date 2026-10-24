const fs = require('fs');
const code = fs.readFileSync('/tmp/site_bundle.js', 'utf-8');

// Find images
const imgMatches = code.match(/https:\/\/[^"'\s\)]+\.(?:png|jpg|jpeg|svg|webp)/g) || [];
console.log('Images:', Array.from(new Set(imgMatches)));

// Find phone / whatsapp
const wa = code.match(/wa\.me\/[0-9]+/g) || [];
console.log('WhatsApp links:', Array.from(new Set(wa)));

// Find all text blocks > 15 chars that have Portuguese words
const chunks = code.split(/["'`]/).filter(s => s.length > 20 && s.length < 500 && /[áàâãéêíóôõúç]/i.test(s));
console.log('Found ' + chunks.length + ' Portuguese text chunks');
fs.writeFileSync('/tmp/extracted_chunks.json', JSON.stringify(Array.from(new Set(chunks)), null, 2));
