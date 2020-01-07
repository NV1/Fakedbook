class Like < ApplicationRecord

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
