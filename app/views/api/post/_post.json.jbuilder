json.extract! post, :id, :author_id, :profile_id, :content
if post.photo.attached?
    json.photoUrl url_for(post.photo)
end