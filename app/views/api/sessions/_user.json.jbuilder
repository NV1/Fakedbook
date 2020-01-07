json.extract! user, :id, :email, :first_name, :last_name

json.photoUrl url_for(user.photo) 
json.coverPhotoUrl url_for(user.cover_photo)