class Post < ApplicationRecord 

validates :author_id, :profile_id, :content, presence: true

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

    has_one_attached :photo

    has_many :likes,
        foreign_key: :post_id,
        class_name: :Like
end