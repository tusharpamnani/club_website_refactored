'use client'
import { useState } from "react";
import { Trophy, Award, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../components/ui/Card";
import achieversData from '../../data/AchievementData.json'

export default function Achievements() {
  const { achievers, allAwards } = achieversData;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Achievements
          </h1>
          <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-teal-400">
            <Trophy className="w-8 h-8" />
            <h2>Hall of Fame</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievers.map((achiever, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
              <img
                src={achiever.image}
                alt={achiever.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{achiever.name}</h3>
                <div className={`transform transition-all duration-300 ${hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                  {achiever.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-teal-400">
                      <ChevronRight className="w-4 h-4" />
                      <p>{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-teal-400" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allAwards.map((award, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-teal-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={award.awardImage}
                        alt={award.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-teal-400 mb-2">{award.name}</h3>
                      <p className="text-gray-300">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}