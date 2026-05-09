import React, { useState } from 'react';
import { useFrappeGetDocList } from 'frappe-react-sdk';
import { Link } from 'react-router-dom';
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import Layout from '../components/Layout';

const Events = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    // Fetch upcoming events
    const { data: upcomingEvents, isLoading: upcomingLoading, error: upcomingError } = useFrappeGetDocList(
        'Angalia Event',
        {
            fields: ['name', 'title', 'event_date', 'short_description', 'flyer', 'location', 'status'],
            filters: [['published', '=', 1], ['status', '=', 'Upcoming']],
            orderBy: {
                field: 'event_date',
                order: 'asc'
            }
        }
    );

    // Fetch past events
    const { data: pastEvents, isLoading: pastLoading, error: pastError } = useFrappeGetDocList(
        'Angalia Event',
        {
            fields: ['name', 'title', 'event_date', 'short_description', 'flyer', 'recording_link', 'location', 'status'],
            filters: [['published', '=', 1], ['status', '=', 'Past']],
            orderBy: {
                field: 'event_date',
                order: 'desc'
            }
        }
    );

    const formatDate = (dateString) => {
        if (!dateString) return 'Date not available';
        
        try {
            // Handle different date formats from ERPNext
            const date = new Date(dateString);
            
            // Check if date is valid
            if (isNaN(date.getTime())) {
                console.error('Invalid date:', dateString);
                return 'Invalid Date';
            }
            
            return date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            console.error('Error formatting date:', error, dateString);
            return 'Date format error';
        }
    };

    const EventCard = ({ event, isPast = false }) => {
        const imageUrl = event.flyer ? `${window.location.origin}${event.flyer}` : '/assets/images/default-event.jpg';

        return (
            
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ height: '250px', overflow: 'hidden' }}>
                        <img
                            src={imageUrl}
                            className="card-img-top"
                            alt={event.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.target.src = '/assets/images/default-event.jpg';
                            }}
                        />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                            {event.title}
                        </h5>
                        <p className="text-muted mb-2">
                            <i className="fa fa-calendar mr-2"></i>
                            {formatDate(event.event_date)}
                        </p>
                        {event.location && (
                            <p className="text-muted mb-2">
                                <i className="fa fa-map-marker mr-2"></i>
                                {event.location}
                            </p>
                        )}
                        <p className="card-text" style={{ flexGrow: 1 }}>
                            {event.short_description || 'Join us for this exciting event!'}
                        </p>
                        <div className="mt-3">
                            {!isPast ? (
                                <Link
                                    to={`/events/${event.name}`}
                                    className="btn btn-primary btn-block"
                                    style={{ backgroundColor: '#007bff', border: 'none' }}
                                >
                                    <i className="fa fa-ticket mr-2"></i>
                                    Register Now
                                </Link>
                            ) : (
                                <div>
                                    <Link
                                        to={`/events/${event.name}`}
                                        className="btn btn-outline-primary btn-block mb-2"
                                    >
                                        <i className="fa fa-info-circle mr-2"></i>
                                        View Details
                                    </Link>
                                    {event.recording_link && (
                                        <a
                                            href={event.recording_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-success btn-block"
                                        >
                                            <i className="fa fa-play-circle mr-2"></i>
                                            View Recording
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5" >
        <BannerContact/>
         <Breadcrumb breadcrumbTitle="Upcoming & Past Events" />
        
            <section className="events-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    {/* Page Header */}
                    <div className="text-center mb-5">
                        <h1 style={{ color: '#2c3e50', fontWeight: 'bold', marginBottom: '20px' }}>
                            Our Events
                        </h1>
                        <p style={{ fontSize: '18px', color: '#6c757d', maxWidth: '700px', margin: '0 auto' }}>
                            Join us for insightful events, workshops, and webinars designed to help you grow your business and stay ahead in the digital age.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="text-center mb-4">
                        <ul className="nav nav-pills justify-content-center" style={{ display: 'inline-flex', backgroundColor: '#fff', padding: '5px', borderRadius: '50px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('upcoming')}
                                    style={{
                                        borderRadius: '50px',
                                        padding: '10px 30px',
                                        backgroundColor: activeTab === 'upcoming' ? '#007bff' : 'transparent',
                                        color: activeTab === 'upcoming' ? '#fff' : '#6c757d',
                                        border: 'none',
                                        fontWeight: '600'
                                    }}
                                >
                                    <i className="fa fa-calendar-plus mr-2"></i>
                                    Upcoming Events
                                </button>
                            </li>
                            <li className="nav-item ml-2">
                                <button
                                    className={`nav-link ${activeTab === 'past' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('past')}
                                    style={{
                                        borderRadius: '50px',
                                        padding: '10px 30px',
                                        backgroundColor: activeTab === 'past' ? '#007bff' : 'transparent',
                                        color: activeTab === 'past' ? '#fff' : '#6c757d',
                                        border: 'none',
                                        fontWeight: '600'
                                    }}
                                >
                                    <i className="fa fa-history mr-2"></i>
                                    Past Events
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Upcoming Events */}
                    {activeTab === 'upcoming' && (
                        <div>
                            {upcomingLoading && (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <p className="mt-3">Loading upcoming events...</p>
                                </div>
                            )}

                            {upcomingError && (
                                <div className="alert alert-danger text-center" role="alert">
                                    <i className="fa fa-exclamation-triangle mr-2"></i>
                                    Error loading events. Please try again later.
                                </div>
                            )}

                            {!upcomingLoading && !upcomingError && upcomingEvents && upcomingEvents.length === 0 && (
                                <div className="text-center py-5">
                                    <i className="fa fa-calendar-times" style={{ fontSize: '64px', color: '#ccc', marginBottom: '20px' }}></i>
                                    <h4 style={{ color: '#6c757d' }}>No Upcoming Events</h4>
                                    <p style={{ color: '#adb5bd' }}>Check back soon for new events!</p>
                                </div>
                            )}

                            {!upcomingLoading && !upcomingError && upcomingEvents && upcomingEvents.length > 0 && (
                                <div className="row">
                                    {upcomingEvents.map((event) => (
                                        <EventCard key={event.name} event={event} isPast={false} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Past Events */}
                    {activeTab === 'past' && (
                        <div>
                            {pastLoading && (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <p className="mt-3">Loading past events...</p>
                                </div>
                            )}

                            {pastError && (
                                <div className="alert alert-danger text-center" role="alert">
                                    <i className="fa fa-exclamation-triangle mr-2"></i>
                                    Error loading events. Please try again later.
                                </div>
                            )}

                            {!pastLoading && !pastError && pastEvents && pastEvents.length === 0 && (
                                <div className="text-center py-5">
                                    <i className="fa fa-calendar-times" style={{ fontSize: '64px', color: '#ccc', marginBottom: '20px' }}></i>
                                    <h4 style={{ color: '#6c757d' }}>No Past Events</h4>
                                    <p style={{ color: '#adb5bd' }}>Past events will appear here.</p>
                                </div>
                            )}

                            {!pastLoading && !pastError && pastEvents && pastEvents.length > 0 && (
                                <div className="row">
                                    {pastEvents.map((event) => (
                                        <EventCard key={event.name} event={event} isPast={true} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Events;
