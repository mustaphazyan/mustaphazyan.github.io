import { Music } from 'lucide-react';

export default function ArtistsSection() {
  const artists = [
    {
      name: 'Mustapha Zyan',
      description: 'فنان متميز من ZAHRAOUI PROD',
      spotifyUrl: 'https://open.spotify.com',
    },
    {
      name: 'Hakim Qaisar',
      description: 'فنان متميز من ZAHRAOUI PROD',
      spotifyUrl: 'https://open.spotify.com',
    },
    {
      name: 'Kader El Berkani',
      description: 'فنان متميز من ZAHRAOUI PROD',
      spotifyUrl: 'https://open.spotify.com',
    },
  ];

  return (
    <section id="artists" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-amber-400">المتميزون</span>
            <span className="text-blue-700 mr-2">الفنانون</span>
          </h2>
          <p className="text-gray-600 text-lg">
            اكتشف الفنانين والأعمال الموسيقية الرائعة التابعة لـ ZAHRAOUI PROD
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="artist-card bg-gradient-to-b from-blue-50 to-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Artist Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Music size={64} className="text-white opacity-50" />
              </div>

              {/* Artist Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {artist.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {artist.description}
                </p>

                {/* Spotify Button */}
                <a
                  href={artist.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-accent"
                >
                  استمع على Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
