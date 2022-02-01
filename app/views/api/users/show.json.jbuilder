json.extract! @user, :id, :fname, :lname, :email
json.pfp url_for(@user.pfp)