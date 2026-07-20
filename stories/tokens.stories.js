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
  ['sun',          '#E09040'],
  ['sun-light',    '#EDB068'],
  ['pop-red',      '#E83A4A'],
  ['dusk',         '#101D13'],
  ['dusk-light',   '#1A2D1F'],
  ['fern-light',   '#7B9A85'],
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

export const Semantic = {
  name: 'Semantic Tokens (Light / Dark)',
  render: () => `
    <div style="padding:32px;max-width:720px">
      <p style="font-size:12px;color:var(--color-text-muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:16px">
        Use the Theme toolbar control above to toggle light / dark
      </p>
      <div style="
        background:var(--color-bg);
        border:1px solid var(--color-border);
        border-radius:12px;
        padding:24px;
      ">
        <div style="
          background:var(--color-surface);
          border:1px solid var(--color-border);
          border-radius:8px;
          padding:20px;
          margin-bottom:16px;
        ">
          <p style="font-family:var(--font-display);font-weight:700;font-size:1.375rem;color:var(--color-text);margin-bottom:8px">
            Semantic surface
          </p>
          <p style="font-size:0.875rem;color:var(--color-text);margin-bottom:6px">
            Body text uses --color-text.
          </p>
          <p style="font-size:0.8125rem;color:var(--color-text-muted)">
            Secondary text uses --color-text-muted.
          </p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button style="
            background:var(--color-action);
            color:var(--color-linen);
            border:none;border-radius:6px;
            padding:8px 16px;font-family:var(--font-body);font-weight:700;
            font-size:13px;text-transform:uppercase;letter-spacing:.04em;
            min-height:auto;cursor:default;
          ">Primary action</button>
          <button style="
            background:var(--color-action-alt);
            color:var(--color-linen);
            border:none;border-radius:6px;
            padding:8px 16px;font-family:var(--font-body);font-weight:700;
            font-size:13px;text-transform:uppercase;letter-spacing:.04em;
            min-height:auto;cursor:default;
          ">Secondary action</button>
        </div>
      </div>
    </div>
  `,
};
