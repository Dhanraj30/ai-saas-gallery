import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 
              "bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white",
            card: "bg-transparent shadow-none",
            headerTitle: "text-white",
            headerSubtitle: "text-gray-400",
            socialButtonsBlockButton: "bg-[#252525] border-gray-700 hover:bg-[#2A2A2A] text-white",
            socialButtonsBlockButtonText: "text-white font-normal",
            formFieldLabel: "text-gray-300",
            formFieldInput: "bg-[#252525] border-gray-700 text-white",
            footerActionText: "text-gray-400",
            footerActionLink: "text-cyan-400 hover:text-cyan-300",
            dividerText: "text-gray-500",
            dividerLine: "bg-gray-800",
          },
        }}
      />
    </div>
  )
}