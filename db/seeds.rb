# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'


kevin = User.create!(first_name: "Kevin", last_name: "Malone", email:"kevinmalone@gmail.com",password:"password", birthday:"1st January 2018")

file = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/kevin.jpg')
kevin.photo.attach(io:file, filename: 'kevin.jpg');

file2 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/kevin_cover.png')
kevin.cover_photo.attach(io: file2, filename:'kevin_cover.png')


jim = User.create(first_name: "Jim", last_name: "Halpert", email:"jim@gmail.com",password:"password", birthday:"1st January 2018")

file3 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/jim.png')
jim.photo.attach(io:file3, filename: 'jim.png');

file4 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/jim_cover.jpg')
jim.cover_photo.attach(io: file4, filename:'jim_cover.jpg')

michael = User.create(first_name: "Michael", last_name: "Scott", email:"michael@gmail.com",password:"password", birthday:"1st January 2018")

file5 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/michael.jpg')
michael.photo.attach(io:file5, filename: 'michael.jpg');

file6 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/michael_cover.png')
michael.cover_photo.attach(io: file6, filename:'michael_cover.png')

pam = User.create(first_name: "Pam", last_name: "Beesly", email:"pam@gmail.com",password:"password", birthday:"1st January 2018")

file5 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/pam.jpg')
pam.photo.attach(io:file5, filename: 'pam.jpg');

file6 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/jim_cover.jpg')
pam.cover_photo.attach(io: file6, filename:'jim_cover.jpg')

andy = User.create(first_name: "Andy", last_name: "Bernard", email:"andy@gmail.com",password:"password", birthday:"1st January 2018")

file7 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/andy.jpg')
andy.photo.attach(io:file7, filename: 'andy.jpg');

file8 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/andy_cover.jpg')
andy.cover_photo.attach(io: file8, filename:'andy_cover.jpg')

dwight = User.create(first_name: "Dwight", last_name: "Schrute", email:"dwight@gmail.com",password:"password", birthday:"1st January 2018")
file9 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/dwight.jpg')
dwight.photo.attach(io: file9 , filename:'dwight.jpg')

file9 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/dwight_cover.jpg')
dwight.cover_photo.attach(io: file9 , filename:'dwight_cover.jpg')

# Kevin friends
friend1 = Friend.create(user_one_id:kevin.id, user_two_id: pam.id, status:true)
friend2 = Friend.create(user_one_id:kevin.id, user_two_id: michael.id, status:true)
friend3 = Friend.create(user_one_id:kevin.id, user_two_id: andy.id, status:true)
friend4 = Friend.create(user_one_id:jim.id, user_two_id: kevin.id, status:false)

#Michael friends
friend1 = Friend.create(user_one_id:michael.id, user_two_id: pam.id, status:true)
friend3 = Friend.create(user_one_id:michael.id, user_two_id: andy.id, status:true)
friend4 = Friend.create(user_one_id:jim.id, user_two_id: michael.id, status:true)

#Jim friends
friend1 = Friend.create(user_one_id:jim.id, user_two_id: pam.id, status:true)
friend3 = Friend.create(user_one_id:jim.id, user_two_id: andy.id, status:true)

#Pam friends
friend3 = Friend.create(user_one_id:pam.id, user_two_id: andy.id, status:true)

#posts
post1 = Post.create(author_id: kevin.id, profile_id: kevin.id, content: "Hey guys I'm bringing in my famous chilli tomorrow!")
file9 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/kevin_chilli.jpg')
post1.photo.attach(io: file9, filename:'kevin_chilli.jpg')
comment2 = Comment.create(post_id:post1.id, author_id:dwight.id, content:"I'll bring some beets they'll go great together")
comment1 = Comment.create(post_id:post1.id, author_id:michael.id, content:"Don't.")

post2 = Post.create(author_id: kevin.id, profile_id: pam.id, content: "Where are my copies???")
comment2 = Comment.create(post_id: post2.id, author_id: pam.id, content: "Kevin it's 12 AM!!!!")


post3 = Post.create(author_id: michael.id, profile_id:jim.id, content:"Get ready for RABIES awareness run tomorrow!!!")
file10 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/officerun3.jpg')
post3.photo.attach(io: file10, filename:'officerun3.jpg')

comment4 = Comment.create(post_id:post3.id, author_id:jim.id, content:"Sorry I actually can't come to work tomorrow")


post4 = Post.create(author_id: andy.id, profile_id: kevin.id, content: "Proud to be a member of Dunder Mifflin")
file11 = open('https://fakedbook-seeds.s3-us-west-1.amazonaws.com/kevin_olympics.jpg')
post4.photo.attach(io: file11, filename:'kevin_olympics.jpg')


comment4 = Comment.create(post_id:post4.id, author_id:michael.id, content:"YES!")

comment4 = Comment.create(post_id:post4.id, author_id:kevin.id, content:"Definitely")
comment4 = Comment.create(post_id:post4.id, author_id:pam.id, content:"Love you all")