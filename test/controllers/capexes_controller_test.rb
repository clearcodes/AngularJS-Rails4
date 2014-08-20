require 'test_helper'

class CapexesControllerTest < ActionController::TestCase
  setup do
    @capex = capexes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:capexes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create capex" do
    assert_difference('Capex.count') do
      post :create, capex: { amount: @capex.amount, description: @capex.description, ex_type: @capex.ex_type, title: @capex.title }
    end

    assert_redirected_to capex_path(assigns(:capex))
  end

  test "should show capex" do
    get :show, id: @capex
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @capex
    assert_response :success
  end

  test "should update capex" do
    patch :update, id: @capex, capex: { amount: @capex.amount, description: @capex.description, ex_type: @capex.ex_type, title: @capex.title }
    assert_redirected_to capex_path(assigns(:capex))
  end

  test "should destroy capex" do
    assert_difference('Capex.count', -1) do
      delete :destroy, id: @capex
    end

    assert_redirected_to capexes_path
  end
end
