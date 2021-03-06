class CreateJoinTablePostsComments < ActiveRecord::Migration[6.0]
  def change
    create_join_table :posts, :comments do |t|
      t.index [:post_id, :user_id, :comment_id]
      t.index [:comment_id, :post_id, :user_id]
    end
  end
end
