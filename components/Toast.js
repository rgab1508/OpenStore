export default function Toast({ headerMessage, message }) {
  return (
    <div className="toast">
      <div className="toast-header">
        <strong className="mr-auto">{headerMessage}</strong>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
}
