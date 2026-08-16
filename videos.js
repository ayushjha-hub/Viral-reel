/*
  ============================================
  YAHAN NAYA VIDEO ADD KARO
  ============================================
  Har video ek entry hai. Bas is pattern me copy-paste karke naya object
  array ke SHURU me daal do (taaki naya video sabse upar dikhe).

  url      -> Poora video link daalo, jahan se bhi ho
              YouTube/Vimeo link ho to video seedha card ke andar khul ke
              play hoga. Kisi aur site ka link ho to click karne par
              wo link naye tab me khul jayega.
  title    -> Video ka title (jo dikhega)
  category -> Kis category me daalna hai (jo bhi naam chaho de sakte ho)
  date     -> Kab add kiya (sirf dikhane ke liye, "YYYY-MM-DD" format me)

  IMPORTANT: Sirf wahi links daalo jinke tumhare paas rights/permission hai
  share karne ki. Kisi ke bina permission ke private/leaked video links
  daalna is site ka intended use nahi hai.
*/

const VIDEOS = [
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Sample Video Title Yahan Likho",
    category: "Entertainment",
    date: "2026-08-15"
  },
  {
    url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    title: "Doosra Sample Video",
    category: "Tech",
    date: "2026-08-14"
  },
  {
    url: "https://vimeo.com/76979871",
    title: "Teesra Sample Video (Vimeo)",
    category: "Music",
    date: "2026-08-13"
  }
];
