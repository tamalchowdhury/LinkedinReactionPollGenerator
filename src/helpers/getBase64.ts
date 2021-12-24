export default function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      window.alert('Only jpg, png & gif image files are allowed!')
      return
    }
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
