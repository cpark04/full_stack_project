class AddDifficultyToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :difficulty, :string
  end
end
