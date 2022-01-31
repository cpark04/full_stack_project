class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :trail_id, null: false
      t.integer :rating, null: false
      t.text :comment, null: false
      t.date :review_date, null: false
      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :trail_id
  end
end
