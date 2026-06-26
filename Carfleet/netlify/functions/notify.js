exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, phone, city, tripType, checkin, checkout, car } = JSON.parse(event.body);

    const instanceId = process.env.GREENAPI_INSTANCE_ID;
    const token      = process.env.GREENAPI_TOKEN;

    if (!instanceId || !token) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Green API credentials not set' }) };
    }

    const message =
      `🚗 *New CarFleet Booking*\n` +
      `──────────────────\n` +
      `👤 Name: ${name}\n` +
      `📱 Phone: ${phone}\n` +
      `🏙️ City: ${city}\n` +
      `🛣️ Trip: ${tripType}\n` +
      `🚙 Car: ${car}\n` +
      `📅 Check-in: ${checkin}\n` +
      `📅 Check-out: ${checkout}`;

    const url = `https://api.green-api.com/waInstance${instanceId}/sendMessage/${token}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: '917010957455@c.us',
        message,
      }),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, greenapi: result }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
