import Image from "next/image"
import Link from "next/link"

export default function TeamSection() {
  // Hardcoded team data with the specific names and roles
  const team = [
    {
      name: "Steven Siegel",
      role: "CEO / President",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Evan Siegel",
      role: "COO / Vice President",
      image: "/images/evan-headshot-professional.jpg",
    },
    {
      name: "Karen Siegel",
      role: "Office Liason",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sandi Di Leo",
      role: "Director of Finance and Office Administration",
      image: "/images/sandi-headshot.jpg",
    },
  ]

  return (
    <section
      className=""
      style={{
        boxShadow: "inset 0 0 150px rgba(255, 202, 119, 0.15)",
        background: "#080808",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-white text-center mb-10 pt-10">Management Team</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-center mx-auto max-w-4xl">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto w-24 h-24 md:w-32 md:h-32 relative mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-white font-medium">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pb-10">
          <Link
            href="/about"
            className="px-8 py-3 border border-[rgba(255,202,119,0.5)] bg-[#262016] text-[#ffe2b6] hover:bg-[#362e24] transition-colors rounded-md font-medium"
          >
            MEET OUR TEAM
          </Link>
        </div>
      </div>
    </section>
  )
}
