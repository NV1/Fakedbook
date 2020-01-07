class Comment < ApplicationRecord

    validates :post_id, :content, :author_id, presence: true

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
end