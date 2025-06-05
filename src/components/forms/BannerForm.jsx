import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

const API_URL = `${BASE_URL}/api/banner`;

const BannerForm = () => {
  const [banner, setBanner] = useState(null);
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [image, setImage] = useState(null);
  const [logo1, setLogo1] = useState(null);
  const [logo2, setLogo2] = useState(null);
  const [logo3, setLogo3] = useState(null);
  const [logo4, setLogo4] = useState(null);



  // Fetch banner
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setBanner(res.data);
      setHeading(res.data?.heading || '');
      setSubheading(res.data?.subheading || '');
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('subheading', subheading);
    if (image) formData.append('image', image);
    if (logo1) formData.append('logo1',logo1);
    if (logo2) formData.append('logo2',logo2);
    if (logo3) formData.append('logo3',logo3);
    if (logo4) formData.append('logo4',logo4);



    try {
      if (banner?._id) {
        await axios.put(`${API_URL}/${banner._id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Error saving banner');
    }
  };

  const handleDeleteField = async (field) => {
    if (!banner?._id) return;
    await axios.patch(`${API_URL}/${banner._id}/delete/${field}`);
    window.location.reload();
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Banner</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          {banner?.heading && (
            <button
              type="button"
              onClick={() => handleDeleteField('heading')}
              className="text-red-600 mt-1 text-sm"
            >
              Delete Heading
            </button>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Subheading</label>
          <input
            type="text"
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          {banner?.subheading && (
            <button
              type="button"
              onClick={() => handleDeleteField('subheading')}
              className="text-red-600 mt-1 text-sm"
            >
              Delete Subheading
            </button>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Background Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full"
          />
          {banner?.image && (
            <div className="mt-2">
              <img
                src={`${BASE_URL}/uploads/${banner.image}`}
                alt="Banner"
                className="w-full h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Logo1</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo1(e.target.files[0])}
            className="block w-full"
          />
          {banner?.logo1 && (
            <div className="mt-2">
              <img
                src={`${BASE_URL}/uploads/${banner.logo1}`}
                alt="Banner"
                className="w-full h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">logo2</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo2(e.target.files[0])}
            className="block w-full"
          />
          {banner?.logo2 && (
            <div className="mt-2">
              <img
                src={`${BASE_URL}/uploads/${banner.logo2}`}
                alt="Banner"
                className="w-full h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Logo3</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo3(e.target.files[0])}
            className="block w-full"
          />
          {banner?.logo3 && (
            <div className="mt-2">
              <img
                src={`${BASE_URL}/uploads/${banner.logo3}`}
                alt="Banner"
                className="w-full h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Logo4</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo4(e.target.files[0])}
            className="block w-full"
          />
          {banner?.logo4 && (
            <div className="mt-2">
              <img
                src={`${BASE_URL}/uploads/${banner.logo4}`}
                alt="Banner"
                className="w-full h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Banner
        </button>
      </form>
    </div>
  );
};

export default BannerForm;
