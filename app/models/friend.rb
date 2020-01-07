class Friend < ApplicationRecord

    validates :user_one_id, :user_two_id, presence:true
    validates :status, inclusion:{in: [true,false]}

    belongs_to :sender,
        foreign_key: :user_one_id,
        class_name: :User

    belongs_to :receiver,
        foreign_key: :user_two_id,
        class_name: :User

end