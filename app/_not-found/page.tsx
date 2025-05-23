export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1b1814",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "white",
          marginBottom: "0.75rem",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "white",
          marginBottom: "1rem",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          color: "#a0a0a0",
          marginBottom: "2rem",
        }}
      >
        Sorry, we couldn't find the page you're looking for.
      </p>
      <a
        href="/"
        style={{
          backgroundColor: "#ffca77",
          color: "black",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.375rem",
          fontWeight: "500",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Return Home
      </a>
    </div>
  )
}
