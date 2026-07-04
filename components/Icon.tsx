// Line-style SVG icons (ported from the NEXA reference design).
const ICONS: Record<string, string> = {
  home: '<path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>',
  book: '<path d="M12 6c-1.6-1.2-4.2-2-7-2v14c2.8 0 5.4.8 7 2 1.6-1.2 4.2-2 7-2V4c-2.8 0-5.4.8-7 2Z"/><path d="M12 6v14"/>',
  chevL: '<path d="M14 6l-6 6 6 6"/>',
  chevR: '<path d="M10 6l6 6-6 6"/>',
  arrowR: '<path d="M5 12h13M13 6l6 6-6 6"/>',
  check: '<path d="M5 12l5 5 9-11"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  star: '<path d="M12 3.6l2.5 5.1 5.6.8-4.1 4 1 5.6L12 21.4 7 19.1l1-5.6-4.1-4 5.6-.8z"/>',
  spark: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>',
  bulb: '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a6 6 0 0 0-3.8 10.6c.8.7 1.3 1.4 1.3 2.4h5c0-1 .5-1.7 1.3-2.4A6 6 0 0 0 12 3Z"/>',
  send: '<path d="M4 12l16-8-6 16-3-6-7-2z"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  teacher: '<path d="M12 3 3 7l9 4 9-4-9-4Z"/><path d="M7 9.5V14c0 1.7 2.2 3 5 3s5-1.3 5-3V9.5"/><path d="M21 7v5"/>',
  zoom: '<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 9.5h16M8 3.5v3M16 3.5v3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<path d="M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13"/>',
  pencil: '<path d="M5 19h4l9.5-9.5-4-4L5 15v4Z"/><path d="M13 6l4 4"/>',
  save: '<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7M8 20v-6h8v6"/>',
  reset: '<path d="M5 12a7 7 0 1 1 2 4.9"/><path d="M5 17v-4h4"/>',
  trophy: '<path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/><path d="M12 13v3M9 20h6M9.5 20a2.5 2.5 0 0 1 5 0"/>',
  // subjects
  math: '<path d="M5 12h14"/><circle cx="12" cy="7" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="17" r="1.4" fill="currentColor" stroke="none"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 8.4A2 2 0 0 0 6.8 20h10.4a2 2 0 0 0 1.8-2.6L14 9V3"/><path d="M7.5 14h9"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.6 12h16.8M12 3.5c2.6 2.5 2.6 14.5 0 17M12 3.5c-2.6 2.5-2.6 14.5 0 17"/>',
  chat: '<path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="M8 10h8M8 13h5"/>',
  shield: '<path d="M12 3l7 3v6c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9V6z"/>',
  code: '<path d="M8.5 8l-4 4 4 4M15.5 8l4 4-4 4M13.5 6l-3 12"/>',
  download: '<path d="M12 4v11M8 11l4 4 4-4"/><path d="M5 19h14"/>',
  share: '<path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 12v7h12v-7"/>',
};

export default function Icon({
  name,
  size = 24,
  sw = 1.8,
  className = "",
  style,
}: {
  name: string;
  size?: number;
  sw?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={`ic ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONS[name] || "" }}
    />
  );
}
