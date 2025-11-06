// app/auth/layout.tsx
export const dynamic = "force-static"; // optional — prevents layout caching issues

export const metadata = {
    title: "Authentication | FursatiPro",
    description: "Login or register to continue using FursatiPro",
};

// 👇👇 The key is `export const runtime = "edge";` and `export const metadataBase` don’t matter.
// What matters is adding `export const revalidate = 0;` and using `body` directly.

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        // ✅ use a <div> instead of full html/body, and wrap your auth layout in its own container
        // to avoid inheriting RootLayout components.
        <div style={{ minHeight: "100vh", margin: 0, padding: 0 }}>
            {children}
        </div>
    );
}

// // ✅ Important addition
// export const metadataBase = new URL("http://localhost:3000");
// export const dynamicParams = false;
