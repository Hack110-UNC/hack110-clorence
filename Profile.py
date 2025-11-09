class Profile:
    """Establishing a profile for the user."""
    username: str
    bio: str
    socials: str

    def __init__(self, username: str, bio: str, socials: str):
        self.username = username
        self.bio = bio
        self.socials = socials

    def edit_bio(self):
        self.bio = input("Update bio.")

    def edit_username(self):
        self.username = input("Update username.")

    