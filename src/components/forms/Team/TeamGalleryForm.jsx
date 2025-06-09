import { useState, useEffect } from 'react';
import { BASE_URL } from '../../../api/config';

export default function TeamGalleryForm() {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [image, setImage] = useState('');
  const [galleryId, setGalleryId] = useState(null);

  useEffect(() => {
    fetch(`${ BASE_URL }/api/team-gallery`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setGalleryId(data._id);
          setHeading(data.heading);
          setSubheading(data.subheading);
          setImage(data.image);
        }
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('subheading', subheading);
    const fileInput = document.getElementById('image');
    if (fileInput.files.length) {
      formData.append('image', fileInput.files[0]);
    }

    const method = galleryId ? 'PUT' : 'POST';
    const url = galleryId
      ? `${ BASE_URL }/api/team-gallery/${galleryId}`
      : `${ BASE_URL }/api/team-gallery`;

    const res = await fetch(url, {
      method,
      body: formData,
    });

    const data = await res.json();
    setGalleryId(data._id);
    setImage(data.image);
  };

  const handleDeleteImage = async () => {
    const res = await fetch(`${ BASE_URL }/api/team-gallery/${galleryId}/image`, {
      method: 'PATCH',
    });
   await res.json();
    setImage('');
  };



  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Team Gallery Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Subheading"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {galleryId ? 'Update' : 'Create'}
        </button>
      </form>

      {image && (
        <div className="mt-4 relative">
          <img
            src={`${ BASE_URL }/uploads/${image}`}
            alt="Gallery"
            className="w-full max-h-64 object-cover rounded"
          />
          <button
            onClick={handleDeleteImage}
            className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
          >
            Delete Image
          </button>
        </div>
      )}
    </div>
  );
}
