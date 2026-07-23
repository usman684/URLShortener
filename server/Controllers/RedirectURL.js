import { URLs } from "../Models/url.js";

export const RedirectURL = async (req, res) => {
  const { shortId } = req.params;

  try {
    const url = await URLs.findOne({ shortId });

    if (!url) {
      return res.status(404).json({
        ok: false,
        message: "URL not found",
      });
    }

    res.redirect(url.longUrl);
  } catch (err) {
    res.status(500).json({
      ok: false,
    });
  }
};
