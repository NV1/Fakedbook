const reader = new FileReader();
const file = e.currentTarget.files[0];
reader.onloadend = () =>
  this.setState({ imageUrl: reader.result, imageFile: file});

if (file) {
  reader.readAsDataURL(file);
} else {
  this.setState({ imageUrl: "", imageFile: null });
}