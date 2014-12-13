class ContactPolicy
  attr_reader :user, :contact

  def initialize(user, contact)
    if user
      @user = user
    else 
      @user = User.new
    end

    @contact = contact
  end

  def index?
    user.admin?
  end

  def show?
    user.admin?
  end

  def new?
    true
  end

  def create?
    true
  end

  def edit?
    user.admin?
  end

  def update?
    user.admin?
  end
end
