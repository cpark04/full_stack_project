class ChangeSocialUrlType < ActiveRecord::Migration[5.2]
  def change
    change_column :parks, :social_url, :text
  end
end
