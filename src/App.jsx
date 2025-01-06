import React from 'react';
import { Briefcase, GraduationCap, Award, Users, Mail, Phone, MapPin, UserCircle } from 'lucide-react';

export default function App() {
  // Section header component for consistent styling
  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="border-b border-gray-200 pb-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="bg-blue-50 p-2 rounded-lg">
          <Icon className="text-blue-600 w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Profile Section with Banner and Image */}
      <div className="bg-white shadow">
        {/* Banner Background */}
        <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        
        <div className="max-w-4xl mx-auto px-8">
          {/* Profile Image - Positioned to overlap banner */}
          <div className="relative -mt-20 mb-4">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="pb-8">
            <h1 className="text-3xl font-bold text-gray-900">Nurul Husna Binti Azmi</h1>
            <p className="mt-2 text-lg text-gray-600">Applied Science (Mathematics and Economics) Graduate</p>
            
            <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contact@husna.work" className="hover:text-blue-600">contact@husna.work</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+6011-37226703</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Simpang Ampat, Pulau Pinang</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-8 px-4">
        {/* About Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <SectionHeader icon={UserCircle} title="About" />
          <p className="text-gray-600">
            A dedicated and results-driven professional with a passion for excellence in business management, strategic planning, and
            operational innovation. Skilled in orchestrating complex projects from inception to successful completion, optimizing
            resources, and driving profitability in dynamic environments.
          </p>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <SectionHeader icon={Briefcase} title="Experience" />
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Casual Employee</h3>
              <p className="text-gray-600">Penang Marriot Hotel</p>
              <p className="text-sm text-gray-500">Mar 2024 - Present</p>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Provided flexible support across various departments</li>
                <li>Assisted with daily operations and event setup</li>
                <li>Demonstrated strong time management abilities</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Business and Marketing Manager</h3>
              <p className="text-gray-600">MrParcel@USM</p>
              <p className="text-sm text-gray-500">September 2022 - December 2023</p>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Managed cross-functional teams aligning business objectives</li>
                <li>Established strong relationships with key stakeholders</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <SectionHeader icon={GraduationCap} title="Education" />
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">University of Science Malaysia (USM)</h3>
              <p className="text-gray-600">Applied Science (Mathematics and Economics)</p>
              <p className="text-sm text-gray-500">October 2020 - August 2024</p>
              <p className="text-gray-600">CGPA: 3.19</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <SectionHeader icon={Award} title="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {['Mathematica', 'Microsoft Office', 'Eviews'].map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Team Management', 'Problem Solving', 'Communication'].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <SectionHeader icon={Users} title="Leadership & Activities" />
          <ul className="space-y-2 text-gray-600">
            <li>• Exco of USM Math Society (2022-2023)</li>
            <li>• Vice Project Director of KRU Outdoor Safety Seminar (2024)</li>
            <li>• Coordinator of USM Mathematics Quiz Competition</li>
            <li>• Entrepreneur of USM Incubator (MrParcel@USM)</li>
          </ul>
        </section>

        {/* References Section */}
        <section className="bg-white rounded-lg shadow p-6">
          <SectionHeader icon={UserCircle} title="References" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Dr. Nurul Syafiah Binti Abd Naeeim</h3>
              <p className="text-gray-600">Academic Advisor/ Lecturer</p>
              <p className="text-gray-600">Mathematical Sciences Department</p>
              <p className="text-gray-600">University of Science Malaysia</p>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span>+604-6533944</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <a href="mailto:nsyafiah@usm.my" className="text-blue-600 hover:underline">
                  nsyafiah@usm.my
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Pn. Ferinazulia Binti Abdul Kairm</h3>
              <p className="text-gray-600">Staff in BHEPA USM</p>
              <p className="text-gray-600">BHEPA Main Campus Department</p>
              <p className="text-gray-600">University of Science Malaysia</p>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span>+604-6533413</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <a href="mailto:ferinazulia@usm.my" className="text-blue-600 hover:underline">
                  ferinazulia@usm.my
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
