class PagesController < ApplicationController
  def index
  end

  def about
  end

  def services
  end

  def contact
    @contact = Contact.new
  end
end
