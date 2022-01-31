class Review < ApplicationRecord
  validates :trail_id, :user_id, :rating, :comment, :review_date, presence: true

  belongs_to :trail
  belongs_to :user

  
end
