import React from 'react';
import { Reveal } from '../components/motion/Reveal';
import { Calendar, Package, Clock, Utensils } from 'lucide-react';

const ClientDashboard: React.FC = () => {
  const stats = [
    { label: 'Upcoming Events', value: '2', icon: Calendar },
    { label: 'Total Orders', value: '14', icon: Package },
    { label: 'Active Plans', value: 'Gold', icon: Utensils },
  ];

  const bookings = [
    { id: '#BK-2094', date: 'Oct 24, 2024', event: 'Office Townhall', status: 'Confirmed', amount: '₹12,500' },
    { id: '#BK-2102', date: 'Nov 02, 2024', event: 'Client Lunch', status: 'Pending', amount: '₹4,200' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-bg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-serif text-primary">Namaste, TechFlow Systems</h1>
            <p className="text-text-muted">Manage your corporate plans and event bookings.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-primary">
            Balance: ₹0.00
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-serif font-bold text-primary">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-bg-alt/30 rounded-full flex items-center justify-center text-primary">
                  <stat.icon size={24} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Recent Bookings */}
        <Reveal delay={0.3}>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-primary">Recent Bookings</h3>
              <button className="text-sm text-secondary hover:text-primary transition-colors">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-bg/50 text-text-muted text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Booking ID</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Event</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-primary">{booking.id}</td>
                      <td className="px-6 py-4 text-text-muted">{booking.date}</td>
                      <td className="px-6 py-4 text-primary">{booking.event}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-primary font-medium">{booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ClientDashboard;