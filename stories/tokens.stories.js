export default {
  title: 'Foundation/Tokens',
};

const swatches = [
  ['linen',        '#FDFBF7'],
  ['fern',         '#6B8C75'],
  ['meadow',       '#4C8B5A'],
  ['meadow-light', '#5EA36C'],
  ['canopy',       '#2A5438'],
  ['sky',          '#7BAFD4'],
  ['lake',         '#2C6E8A'],
  ['lake-light',   '#3D8FAD'],
  ['pool',         '#4DB8C8'],
  ['sun',          '#D96B2A'],
  ['sun-light',    '#E88C52'],
  ['pop-red',      '#E83A4A'],
];

export const Colors = {
  render: () => {
    const grid = swatches.map(([name, hex]) => `
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
        <div style="
          width:64px;height:64px;
          background:${hex};
          border:1px solid rgba(0,0,0,0.08);
          border-radius:8px;
          flex-shrink:0
        "></div>
        <div>
          <div style="font-family:monospace;font-weight:700">--color-${name}</div>
          <div style="color:#6B8C75;font-family:monospace;font-size:14px">${hex}</div>
        </div>
      </div>
    `).join('');

    return `<div style="padding:32px;max-width:480px">${grid}</div>`;
  },
};

export const Typography = {
  render: () => `
    <div style="padding:32px;max-width:720px">
      <p style="font-size:12px;color:#6B8C75;letter-spacing:.08em;text-transform:uppercase;margin-bottom:24px">Display / Headings — Fraunces</p>
      <h1 style="font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:3rem;line-height:1.15;margin-bottom:8px">Sebago Lake</h1>
      <h2 style="font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:2.25rem;line-height:1.15;margin-bottom:8px">Long Summer Days</h2>
      <h3 style="font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:1.875rem;line-height:1.15;margin-bottom:32px">Grass and Broad-leafed Trees</h3>

      <p style="font-size:12px;color:#6B8C75;letter-spacing:.08em;text-transform:uppercase;margin-bottom:16px">Body — Nunito</p>
      <p style="font-size:1rem;line-height:1.6;margin-bottom:8px">Maine summers are short and sweet — warm green meadows, hazy blue skies, and cold water that makes you feel alive.</p>
      <p style="font-size:0.875rem;color:#6B8C75;line-height:1.6">Small text at 14px — secondary labels, captions, metadata.</p>
    </div>
  `,
};
