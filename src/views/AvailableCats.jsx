import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Abyssinian' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats;

    if (breedFilter) {
      filtered = filtered.filter((cat) => cat.breed.toLowerCase() === breedFilter.toLowerCase());
    }

    if (nameSearch) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(nameSearch.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [breedFilter, nameSearch, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>


      <div className="filters d-flex justify-content-center mb-4">
        <select
          className="form-select me-3"
          style={{ maxWidth: '200px' }}
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        >
          <option value="">All Breeds</option>
          {[...new Set(availableCats.map((cat) => cat.breed))].map((breed, i) => (
            <option key={i} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="form-control"
          style={{ maxWidth: '300px' }}
          placeholder="Search by name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </div>


      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Breed: {cat.breed}</p>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats found matching the filters.</p>
        )}
      </div>
    </section>
  );
}
