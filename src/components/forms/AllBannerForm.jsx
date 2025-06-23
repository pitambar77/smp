import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";

const pageKeys = [
  "africanScenic",
  "lifetimeSafaris",
  "jerryTanzania",
  "falconSafari",
  "taituTour",
  "capeachiveTour",
  "africanluxurySafariBanner",
  "offwegoCaseStudyBanner",
  "wowTravelCaseStudy",
  "wildernessFirtTravel",
  "outdoorAdventure",
  "ourclient",
  "team",
  "review",
  "training",
  "oueCompany",
  "ebook",
  "letsGrow",
  "socialmedia",
  "organicMarketng",
  "getStartTraning",
  "webDesign",
  "pricing",
  "contentMarketng",
  "googleads"
];



const AllBannerForm = () => {
  const [pageKey, setPageKey] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState("");
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchAllBanners();
  }, []);

  useEffect(() => {
    if (pageKey) {
      fetchBannerByKey(pageKey);
    }
  }, [pageKey]);

  const fetchAllBanners = async () => {
    try {
      const res = await axios.get(`${ BASE_URL }/api/all-banners`);
      setBanners(res.data);
    } catch (err) {
      console.error("Failed to fetch banners", err);
    }
  };

  const fetchBannerByKey = async (key) => {
    try {
      const res = await axios.get(`${ BASE_URL }/api/all-banners/${key}`);
      const { title, description, imageUrl } = res.data;
      setTitle(title || "");
      setDescription(description || "");
      setPreviewImage(`${ BASE_URL }/${imageUrl}`);
    } catch {
      setTitle("");
      setDescription("");
      setPreviewImage(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pageKey || !title) {
      return setMessage("Page Key and Title are required");
    }

    const formData = new FormData();
    formData.append("pageKey", pageKey);
    formData.append("title", title);
    formData.append("description", description);
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post(`${ BASE_URL }/api/all-banners`, formData);
      setMessage("Banner saved successfully!");
      setImageFile(null);
      fetchAllBanners();
    } catch (err) {
      console.error("Error saving banner", err);
      setMessage("Error saving banner");
    }
  };

  const handleDelete = async (key) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;
    try {
      await axios.delete(`${ BASE_URL }/api/all-banners/${key}`);
      setMessage("Banner deleted");
      fetchAllBanners();
    } catch (err) {
      console.error("Error deleting banner", err);
      setMessage("Error deleting banner");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Banner Management</h2>

      {message && <p className="text-center text-sm text-blue-500 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="font-semibold block">Page Key</label>
          <select
            value={pageKey}
            onChange={(e) => setPageKey(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Page</option>
            {pageKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold block">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="col-span-2">
          <label className="font-semibold block">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="font-semibold block">Image Upload</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {previewImage && (
          <div>
            <label className="font-semibold block">Preview</label>
            <img src={previewImage} alt="Preview" className="h-32 w-full object-cover rounded" />
          </div>
        )}

        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Banner
          </button>
        </div>
      </form>

      <hr className="my-8" />

      <h3 className="text-xl font-bold mb-4">All Banners</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Page Key</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner) => (
              <tr key={banner.pageKey} className="border-t">
                <td className="px-4 py-2">{banner.pageKey}</td>
                <td className="px-4 py-2">{banner.title}</td>
                <td className="px-4 py-2">{banner.description?.slice(0, 60)}...</td>
                <td className="px-4 py-2">
                  <img
                    src={`${ BASE_URL }/${banner.imageUrl}`}
                    alt="banner"
                    className="w-24 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(banner.pageKey)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {banners.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No banners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBannerForm;
