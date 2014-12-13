class Admin::ContactsController < ApplicationController
  def index
    @contacts = Contact.all
    authorize @contacts
  end

  def show
    @contact = Contact.find(params[:id])
    authorize @contact
  end

  def new
    @contact = Contact.new
    authorize @contact
  end

  def create
    @contact = Contact.new(contact_params)
    authorize @contact
    @contact.save()
    redirect_to root_path, notice: "Message has been sent to Greywire IT"
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :body)
  end
end
