export function DemoNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`demo-notice ${compact ? "demo-notice-compact" : ""}`} role="note">
      <span className="demo-notice-mark" aria-hidden="true">i</span>
      <p><strong>Student demo:</strong> catalogue prices and availability are illustrative, not live inventory. Confirm the item, final price, and delivery charges with the artisan before a real order.</p>
    </aside>
  );
}
