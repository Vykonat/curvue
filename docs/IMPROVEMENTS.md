# Improvements that can be made

## Authentication
Authentication is secure, though there is nothing stopping me from just setting a cookie with the apps AUTH_TOKEN key and any value to trick the frontend navigation guards into _thinking_ I'm logged in - the token __IS NOT__ actually valid on laravels side and cannot be used for modifying data.

Essentially, if we were to have a dashboard component that only logged in users can view, an unauthenticaed user could still set a random AUTH_TOKEN and see the page (just without any auth data that is provided from the backend).


The same is true with deleting the AUTH_TOKEN while logged in and navigating to the login page, this is of course trivial, you're just manually logging out.
1. Move authentication token to a cookie, currently using localStorage
    - Use laravels ```Cookie::queue(Cookie::make)``` method on login
    - Use laravels ```Cookie::queue(Cookie::forget)``` method on logout
    - Add the queued cookie to each response with laravels ```AddQueuedCookiesToResponse``` middleware
    - Will still be able to set any AUTH_TOKEN key and value but the cookie will no longer be queued and sent on request - resulting in a failed auth check