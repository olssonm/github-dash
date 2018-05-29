# Github Dash

Github [recently updated the dashboard](https://blog.github.com/changelog/2018-05-17-user-landingpage-changes/). Most of the changes are very much welcome, but for a user as me – who works mostly in very small teams (or even by myself) on multiple projects at once the ordering of the repos doesn't make much sense and messes with my usual workflow (before this update the repositories was ordered by when they was last updated which made it quick and easy to find repos for PRs etc.) This updated also removed the highlights of the private repos for some reason.

**This simple Chrome-extension injects another module with "Recently updated" repositories, and also once again highlights the repos that are private.**

Quickly written using jQuery in a very inefficient manner – but it does it's job. Might put some more time into it later if needed.

#### Before

<a href="https://user-images.githubusercontent.com/907114/40656668-64eebce4-6345-11e8-85f6-3a7912cc1f29.png">
    <img width="650" alt="before" src="https://user-images.githubusercontent.com/907114/40656668-64eebce4-6345-11e8-85f6-3a7912cc1f29.png">
</a>

#### After

<a href="https://user-images.githubusercontent.com/907114/40656666-64d3298e-6345-11e8-8763-96b0c92c5c01.png">
    <img width="650" alt="after" src="https://user-images.githubusercontent.com/907114/40656666-64d3298e-6345-11e8-8763-96b0c92c5c01.png">
</a>

### Installation

Download repo as .zip; visit `chrome://extensions` and select "Load unpacked".

### Thanks

As this is my first Chrome extension, I checked out [@urre](https://github.com/urre)'s great [avanza-night-mode](https://github.com/urre/avanza-night-mode)-extension to get a grasp on how it's done.

### License

The MIT License (MIT). Please see [License File](LICENCE.md) for more information.

© 2018 [Marcus Olsson](https://marcusolsson.me).
