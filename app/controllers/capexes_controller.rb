class CapexesController < ApplicationController
  before_action :set_capex, only: [:show, :edit, :update, :destroy]

  # GET /capexes
  # GET /capexes.json
  def index
    @capexes = Capex.all
  end

  # GET /capexes/1
  # GET /capexes/1.json
  def show
  end

  # GET /capexes/new
  def new
    @capex = Capex.new
  end

  # GET /capexes/1/edit
  def edit
  end

  # POST /capexes
  # POST /capexes.json
  def create
    @capex = Capex.new(capex_params)

    respond_to do |format|
      if @capex.save
        format.html { redirect_to @capex, notice: 'Capex was successfully created.' }
        format.json { render action: 'show', status: :created, location: @capex }
      else
        format.html { render action: 'new' }
        format.json { render json: @capex.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /capexes/1
  # PATCH/PUT /capexes/1.json
  def update
    respond_to do |format|
      if @capex.update(capex_params)
        format.html { redirect_to @capex, notice: 'Capex was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @capex.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /capexes/1
  # DELETE /capexes/1.json
  def destroy
    @capex.destroy
    respond_to do |format|
      format.html { redirect_to capexes_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_capex
      @capex = Capex.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def capex_params
      params.require(:capex).permit(:title, :description, :ex_type, :amount)
    end
end
