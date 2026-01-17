export const registerStudent = async (data) => {
  const res = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error || "Registration failed");
  }

  return result;
};
export const fetchGalleryImages = async () => {
  const res = await fetch("http://localhost:5000/api/gallery");
  return res.json();
};
