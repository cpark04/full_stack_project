class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :trail_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
