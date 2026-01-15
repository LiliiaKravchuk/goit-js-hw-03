function slugify(title) {
const words1 = title.split(" ")
console.log(words1)
const words2 = words1.join("-")
console.log(words2)
const slug = words2.toLowerCase()
  return slug;
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"