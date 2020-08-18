class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    
    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

def showposts
  @user= User.find(params[:id])
  @post= @user.posts
  render json: @user, include: :posts 
end


  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  # ADD Comment
  def add_comment
    @posts = Post.find(params[:id])
    @comment = Comment.find(params[:post_id])
    @post.comments << @comment
    render json: @post, include: :comments
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:post, :user_id)
    end
end
